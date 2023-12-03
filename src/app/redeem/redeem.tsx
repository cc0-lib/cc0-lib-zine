"use client";

import Link from "next/link";
import { useAccount } from "wagmi";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useModal, useSIWE } from "connectkit";
import {
  AnimatePresence,
  motion as m,
  useScroll,
  useSpring,
} from "framer-motion";
import * as z from "zod";

import checkOwner from "@/lib/zora-api/check-owner";
import Lenis from "@studio-freight/lenis";
import ConnectButton from "@/components/web3/connect-button";
import TextEdit from "@/components/edit/text-edit";
import { checkTokenIDClaimed, submitForm } from "./action";

type TokenData = {
  isOwner: boolean;
  name: string;
  owner: string;
  tokenId: string;
};

const FormDataSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(10),
  wallet_address: z.string().startsWith("0x"),
  token_id: z.number().min(0).max(50),
  social: z.string().min(1).startsWith("@").optional(),
  email: z.string().email().optional(),
  created_at: z.string().datetime(),
});

export type FormDataType = z.infer<typeof FormDataSchema>;

const RedeemPage = () => {
  const { address } = useAccount();
  const { isSignedIn } = useSIWE();

  const { setOpen } = useModal();

  const [ownerToken, setOwnerToken] = useState<TokenData | null>(null);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    address: "",
    wallet_address: address || "",
    token_id: Number(ownerToken?.tokenId),
    social: "@johndoe",
    email: "",
    created_at: new Date().toISOString(),
  });

  const [formEdited, setFormEdited] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");
  const [idClaimed, setIdClaimed] = useState<boolean>(false);
  const [startScroll, setStartScroll] = useState(false);
  const [formIsEditing, setFormIsEditing] = useState<boolean>(false);
  const [editedFieldArray, setEditedFieldArray] = useState<string[]>([]);

  const nullTokenData: TokenData = {
    isOwner: false,
    name: "",
    owner: "",
    tokenId: "",
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  const animationOne = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const animationTwo = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 1,
        ease: "easeInOut",
      },
    },
  };

  const getOwnerToken = useCallback(async () => {
    if (!address) return null;

    try {
      const { isOwner, name, owner, tokenId } = await checkOwner(
        address.toLowerCase(),
      );
      const tokenData: TokenData = {
        isOwner,
        name,
        owner,
        tokenId,
      };
      if (isOwner) {
        setOwnerToken(tokenData);
      } else {
        setOwnerToken(nullTokenData);
      }
    } catch (error) {
      console.log(error);
    }
  }, [address]);

  const checkZineClaimed = useCallback(async () => {
    if (!ownerToken) return null;

    const { data, error } = await checkTokenIDClaimed(
      Number(ownerToken?.tokenId),
    );

    if (data && data[0]?.token_id === Number(ownerToken?.tokenId)) {
      setIdClaimed(true);
    }

    if (error) {
      console.log(error);
      setIdClaimed(false);
    }
  }, [ownerToken]);

  const handleAddressChange = (
    newValue: string,
    id: string,
    edited: boolean,
    editing: boolean,
  ) => {
    if (edited && !editing) {
      setFormData((prev) => ({
        ...prev,
        [id]: newValue,
      }));
      setFormEdited(true);
      setEditedFieldArray((prev) => prev.filter((e) => e !== id));
      setFormIsEditing(false);
    } else if (!edited && editing) {
      setEditedFieldArray((prev) => [...new Set([...prev, id])]);
      setFormIsEditing(true);
      setFormValid(false);
    }
  };

  const handleNameChange = (
    newValue: string,
    id: string,
    edited: boolean,
    editing: boolean,
  ) => {
    if (edited && !editing) {
      setFormData((prev) => ({
        ...prev,
        [id]: newValue,
      }));
      setFormEdited(true);
      setEditedFieldArray((prev) => prev.filter((e) => e !== id));
      setFormIsEditing(false);
    } else if (!edited && editing) {
      setEditedFieldArray((prev) => [...new Set([...prev, id])]);
      setFormIsEditing(true);
      setFormValid(false);
    }
  };
  const handleSocialChange = (
    newValue: string,
    id: string,
    edited: boolean,
    editing: boolean,
  ) => {
    if (edited && !editing) {
      setFormData((prev) => ({
        ...prev,
        [id]: newValue,
      }));
      setFormEdited(true);
      setEditedFieldArray((prev) => prev.filter((e) => e !== id));
      setFormIsEditing(false);
    } else if (!edited && editing) {
      setEditedFieldArray((prev) => [...new Set([...prev, id])]);
      setFormIsEditing(true);
      setFormValid(false);
    }
  };
  const handleEmailChange = (
    newValue: string,
    id: string,
    edited: boolean,
    editing: boolean,
  ) => {
    if (edited && !editing) {
      setFormData((prev) => ({
        ...prev,
        [id]: newValue,
      }));
      setFormEdited(true);
      setEditedFieldArray((prev) => prev.filter((e) => e !== id));
      setFormIsEditing(false);
    } else if (!edited && editing) {
      setEditedFieldArray((prev) => [...new Set([...prev, id])]);
      setFormIsEditing(true);
      setFormValid(false);
    }
  };

  const handleSubmit = async () => {
    if (!formValid) return;
    if (formSubmitted) return;
    if (formIsEditing) return;
    if (editedFieldArray.length > 0) return;

    try {
      const { data, error } = await submitForm(formData);

      if (error) {
        if (error.includes("duplicate key")) {
          setFormError(
            `Error: Zine #${ownerToken?.tokenId} has previously been claimed`,
          );
        } else {
          setFormError(error);
        }
      } else {
        setFormError("");
        setFormSubmitted(true);
      }
    } catch (error) {
      console.log(error);
    }

    console.log("submitting....");
  };

  useEffect(() => {
    setIdClaimed(false);
    setFormSubmitted(false);
    setFormEdited(false);
    setFormValid(false);
    setFormError("");
  }, [address]);

  useEffect(() => {
    if (isSignedIn && address) {
      getOwnerToken();
    }
    return () => {
      setOwnerToken(nullTokenData);
    };
  }, [address, isSignedIn]);

  useEffect(() => {
    if (ownerToken) {
      setFormData((prev) => ({
        ...prev,
        token_id: Number(ownerToken?.tokenId),
      }));
    }
  }, [ownerToken]);

  useEffect(() => {
    if (address && address.length > 0) {
      setFormData((prev) => ({
        ...prev,
        wallet_address: address,
      }));
    }
  }, [address]);

  useEffect(() => {
    checkZineClaimed();
  }, [ownerToken]);

  useEffect(() => {
    if (editedFieldArray.length > 0) return;
    const validate = FormDataSchema.safeParse(formData);
    if (validate.success) {
      setFormValid(true);
      setFormError("");
    } else {
      const err = validate.error.issues
        .map((e) => e.path + " Error : " + e.message)
        .join(",\n");
      setFormValid(false);
      setFormError(err);
    }
  }, [formData]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    scrollYProgress.on("change", (a) => {
      if (a > 0.01) {
        setStartScroll(true);
      } else {
        setStartScroll(false);
      }
    });
  }, [scrollYProgress]);

  return (
    <>
      <div
        id="main"
        className="relative flex min-h-screen flex-col items-center justify-between bg-zinc-800 p-8 text-zinc-200 sm:px-12 sm:py-8"
      >
        <div
          id="scroller"
          className="fixed left-0 top-0 z-20 h-4 w-full bg-zinc-800"
        >
          <m.div
            style={{ scaleX }}
            className="h-4 w-full origin-left bg-prim"
          />
        </div>
        <m.div
          variants={animationOne}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-row items-center justify-between gap-8 font-chakra text-base sm:text-xl"
        >
          <span>REDEEM PHASE</span>
          <ConnectButton />
        </m.div>
        <m.div
          variants={animationTwo}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-around gap-10 font-jetbrains"
        >
          <span className="text-center font-chakra text-6xl uppercase text-prim sm:text-9xl">
            <AnimatePresence mode="wait">
              {isSignedIn ? (
                ownerToken?.isOwner ? (
                  idClaimed ? (
                    <FadeText id="redeem-0">Claimed</FadeText>
                  ) : (
                    <FadeText id="redeem-1">Eligible</FadeText>
                  )
                ) : (
                  <FadeText id="redeem-2">Not Eligible</FadeText>
                )
              ) : (
                <FadeText id="redeem-3">-=-++-=+</FadeText>
              )}
            </AnimatePresence>
          </span>

          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-col items-center justify-around gap-4 font-jetbrains uppercase">
              <button
                onClick={() => {
                  if (isSignedIn) {
                    if (ownerToken?.isOwner && !idClaimed) {
                      window.scrollTo({
                        top: window.innerHeight,
                        behavior: "smooth",
                      });
                    }
                  } else {
                    setOpen(true);
                  }
                }}
                className="w-full max-w-xl text-center text-lg uppercase sm:text-3xl"
              >
                <AnimatePresence mode="wait">
                  {isSignedIn ? (
                    ownerToken && ownerToken.isOwner ? (
                      idClaimed ? (
                        <FadeText id="redeem-4">
                          Thank you. please check your email for tracking
                          details
                        </FadeText>
                      ) : (
                        <FadeText id="redeem-5">Click to proceed</FadeText>
                      )
                    ) : (
                      <FadeText id="redeem-6">
                        Sorry, you are not eligible to redeem
                      </FadeText>
                    )
                  ) : (
                    <FadeText id="redeem-7">Please sign in</FadeText>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </Suspense>
        </m.div>
        <m.div
          variants={animationOne}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-row items-center justify-between gap-8 font-chakra text-base sm:text-xl"
        >
          <div className="border-2 border-prim px-8 py-2 text-center text-prim">
            <h1 className="">ONLINE</h1>
          </div>
          <Link href="/">
            <span className="px-4 py-2 text-base hover:bg-prim hover:text-zinc-800 sm:text-xl">
              BACK TO HOME
            </span>
          </Link>
        </m.div>
      </div>
      {!idClaimed && isSignedIn && ownerToken?.isOwner && (
        <m.div
          variants={animationTwo}
          initial="hidden"
          animate="visible"
          id="form"
          className="relative flex min-h-screen flex-col items-center justify-between bg-zinc-900 p-8 text-zinc-200 sm:px-12 sm:py-8"
        >
          <span></span>
          <div className="flex flex-col items-center justify-around gap-6 font-jetbrains sm:gap-10">
            <span className="mt-8 font-chakra text-6xl uppercase text-prim sm:mt-0 sm:text-9xl">
              DETAILS
            </span>
            <div className="flex flex-col items-center justify-around gap-4 text-center font-jetbrains text-lg uppercase sm:text-lg">
              Details needed to redeem your physical zine
            </div>
            {/* <span className="font-chakra text-4xl">#{ownerToken?.tokenId}</span> */}
            <div className="flex w-full max-w-prose flex-col gap-4 p-8">
              <TextEdit
                id="name"
                initialValue={String(formData["name"])}
                onEdit={handleNameChange}
                key={"name"}
                editable={true}
                rows={1}
              />
              <TextEdit
                id="address"
                initialValue={String(formData["address"])}
                onEdit={handleAddressChange}
                key={"address"}
                editable={true}
                rows={3}
              />
              {/* <TextEdit
              id="social"
              initialValue={String(formData["social"])}
              onEdit={handleSocialChange}
              key={"social"}
              editable={true}
              rows={1}
            /> */}

              <TextEdit
                id="email"
                initialValue={String(formData["email"])}
                onEdit={handleEmailChange}
                key={"email"}
                editable={true}
                rows={1}
              />
            </div>
            <span>
              <div className="flex max-w-prose flex-col items-center justify-around gap-4 font-jetbrains text-lg uppercase">
                {formValid && formEdited && !formSubmitted && (
                  <m.span
                    variants={animationOne}
                    initial="hidden"
                    animate="visible"
                    className="text-sm text-green-500"
                  >
                    Form is valid
                  </m.span>
                )}
                {formSubmitted && (
                  <m.span
                    variants={animationOne}
                    initial="hidden"
                    animate="visible"
                    className="max-w-lg text-center text-sm text-green-500"
                  >
                    Thank you! PACKAGE WILL BE SENT IN 2-3 DAYS TIME. PACKAGE
                    TRACKING DETAILS WILL BE SENT TO YOUR EMAIL{" "}
                  </m.span>
                )}
                {formError && (
                  <m.span
                    variants={animationOne}
                    initial="hidden"
                    animate="visible"
                    className="max-w-lg text-center text-sm text-red-500"
                  >
                    {formError}
                  </m.span>
                )}
                {formIsEditing && editedFieldArray.length > 0 && (
                  <m.span
                    variants={animationOne}
                    initial="hidden"
                    animate="visible"
                    className="text-sm text-yellow-500"
                  >
                    {editedFieldArray.join(" & ")} field is being edited. Please
                    press the save button to make changes.
                  </m.span>
                )}
              </div>
            </span>
            <button
              onClick={handleSubmit}
              disabled={!formValid || formSubmitted}
              className={`${
                formValid ? "bg-prim" : "bg-zinc-700"
              } px-4 py-2 font-chakra text-lg uppercase text-zinc-800 hover:bg-prim/10 hover:text-zinc-200 sm:px-8 sm:py-4 sm:text-2xl`}
            >
              SUBMIT
            </button>
          </div>

          <span></span>
        </m.div>
      )}
    </>
  );
};

export default RedeemPage;

const FadeText = ({ id, children }: { id: string; children: string }) => {
  return (
    <m.span
      key={id}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "backOut" }}
      exit={{ opacity: 0 }}
    >
      {children}
    </m.span>
  );
};

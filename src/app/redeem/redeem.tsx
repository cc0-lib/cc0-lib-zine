"use client";

import ConnectButton from "@/components/web3/connect-button";
import Link from "next/link";
import { useAccount } from "wagmi";
import checkOwner from "@/lib/zora-api/check-owner";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useSIWE } from "connectkit";
import Lenis from "@studio-freight/lenis";
import TextEdit from "@/components/edit/text-edit";
import * as z from "zod";
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

  const [ownerToken, setOwnerToken] = useState<TokenData | null>(null);
  const [formData, setFormData] = useState<FormDataType>({
    name: "John Doe",
    address: "Your physical address",
    wallet_address: address!,
    token_id: Number(ownerToken?.tokenId),
    social: "@johndoe",
    email: "john@doe.wtf",
    created_at: new Date().toISOString(),
  });

  const [formEdited, setFormEdited] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");
  const [idClaimed, setIdClaimed] = useState<boolean>(false);

  const nullTokenData: TokenData = {
    isOwner: false,
    name: "",
    owner: "",
    tokenId: "",
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
  ) => {
    if (edited) {
      setFormData((prev) => ({
        ...prev,
        [id]: newValue,
      }));
      setFormEdited(true);
    }
  };

  const handleNameChange = (newValue: string, id: string, edited: boolean) => {
    if (edited) {
      setFormData((prev) => ({
        ...prev,
        [id]: newValue,
      }));
      setFormEdited(true);
    }
  };
  const handleSocialChange = (
    newValue: string,
    id: string,
    edited: boolean,
  ) => {
    if (edited) {
      setFormData((prev) => ({
        ...prev,
        [id]: newValue,
      }));
      setFormEdited(true);
    }
  };
  const handleEmailChange = (newValue: string, id: string, edited: boolean) => {
    if (edited) {
      setFormData((prev) => ({
        ...prev,
        [id]: newValue,
      }));
      setFormEdited(true);
    }
  };

  const handleSubmit = async () => {
    if (!formValid) return;
    if (formSubmitted) return;

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
    setOwnerToken(nullTokenData);
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
    checkZineClaimed();
  }, [ownerToken]);

  useEffect(() => {
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

  return (
    <>
      <div
        id="main"
        className="relative flex min-h-screen flex-col items-center justify-between bg-zinc-800  px-12 py-8 text-zinc-200"
      >
        <div className="flex w-full flex-row items-center justify-between gap-8 font-chakra text-xl">
          <span>REDEEM PHASE</span>
          <ConnectButton />
        </div>
        <div className="flex flex-col items-center justify-around gap-10 font-jetbrains">
          <Suspense fallback={<div>Loading...</div>}>
            <span className="font-chakra text-9xl uppercase text-prim">
              {isSignedIn
                ? ownerToken?.isOwner
                  ? idClaimed
                    ? "Claimed"
                    : "Eligible"
                  : "Not eligible"
                : "-=-++-=+"}
            </span>
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-col items-center justify-around gap-4 font-jetbrains uppercase">
              <Link
                href={`${
                  isSignedIn && ownerToken?.isOwner && !idClaimed
                    ? "#form"
                    : "#"
                }`}
                className="w-full max-w-xl text-center text-3xl"
              >
                {isSignedIn
                  ? ownerToken && ownerToken.isOwner
                    ? idClaimed
                      ? "Thank you. please check your email for tracking details"
                      : "Proceed"
                    : "Sorry, you are not eligible to redeem"
                  : "Please sign in"}
              </Link>
            </div>
          </Suspense>
        </div>
        <div className="flex w-full flex-row items-center justify-between gap-8 font-chakra text-xl ">
          <div className="border-2 border-prim px-8 py-2 text-center text-prim">
            <h1 className="">ONLINE</h1>
          </div>
          <Link href="/">
            <span>BACK TO HOME</span>
          </Link>
        </div>
      </div>
      {!idClaimed && isSignedIn && (
        <div
          id="form"
          className="relative flex min-h-screen flex-col items-center justify-between bg-zinc-800  px-12 py-8 text-zinc-200"
        >
          <span></span>
          <div className="flex flex-col items-center justify-around gap-10 font-jetbrains">
            <span className="font-chakra text-9xl uppercase text-prim">
              DETAILS
            </span>
            <div className="flex flex-col items-center justify-around gap-4 font-jetbrains text-lg uppercase">
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
                {/* {formValid && formEdited && (
                <span className="text-green-500">Form is valid</span>
              )} */}
                {formSubmitted && (
                  <span className="text-center text-green-500">
                    Thank you! PACKAGE WILL BE SENT IN 2-3 DAYS TIME. PACKAGE
                    TRACKING DETAILS WILL BE SENT TO YOUR EMAIL{" "}
                  </span>
                )}
                {formError && <span className="text-red-500">{formError}</span>}
              </div>
            </span>
            <button
              onClick={handleSubmit}
              disabled={!formValid || formSubmitted}
              className={`${
                formValid ? "bg-prim" : "bg-zinc-700"
              } px-8 py-4 font-chakra text-2xl uppercase text-zinc-800 hover:bg-prim/10 hover:text-zinc-200`}
            >
              SUBMIT
            </button>
          </div>

          <span></span>
        </div>
      )}
    </>
  );
};

export default RedeemPage;

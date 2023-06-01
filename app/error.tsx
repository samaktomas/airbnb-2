"use client";

import { useEffect } from "react";

import EmptyState from "@/app/components/EmptyState";

type Props = {
  error: Error;
};

const ErrorState = ({ error }: Props) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
};

export default ErrorState;

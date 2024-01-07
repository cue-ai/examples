"use client";
import {EmbeddedDashboardProvider, EmbeddedItemsRenderer, EmbeddedProvider} from "@cue-ai/embedded";
import {useEffect, useState} from "react";

export const Dashboard = () => {

  if (typeof 'window' === 'undefined') {
    return null;
  }
  return (
    <EmbeddedProvider organizationId="clp1uh44t0005l80f2f5gcz7c">
      <EmbeddedDashboardProvider
        dashboardId="clq746axh0003dyi7mdelhuwb"
        customerId="acme-inc"
      >
        <EmbeddedItemsRenderer/>
      </EmbeddedDashboardProvider>
    </EmbeddedProvider>
  );
}

export default Dashboard

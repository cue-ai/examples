"use client";
import {EmbeddedDashboardProvider, EmbeddedItemsRenderer, EmbeddedProvider} from "@cue-ai/embedded";
import {useEffect, useState} from "react";

export const Dashboard = () => {

  if (typeof 'window' === 'undefined') {
    return null;
  }
  return (
    <EmbeddedProvider organizationId="clqeecp0i0000jk0fxq8mewbz">
      <EmbeddedDashboardProvider
        dashboardId="clqzzomj30000kw0f92tve6uo"
        customerId="clqeecp0i0003jk0f5od55fjp"
      >
        <EmbeddedItemsRenderer />
      </EmbeddedDashboardProvider>
    </EmbeddedProvider>
  );
}

export default Dashboard

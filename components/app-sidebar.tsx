"use client";

import * as React from "react";
import {
  IconBooks,
  IconBrain,
  IconGraph,
  IconGridDots,
  IconHome,
  IconInnerShadowTop,
  IconReportAnalytics,
  IconReportMoney,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Logo } from "./navbar-05/logo";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/app",
      icon: IconHome,
    },
    {
      title: "Ai-chat",
      url: "/app/ai-chat",
      icon: IconBrain,
    },
    // {
    //   title: "Financial Analyser",
    //   url: "/app/financial-analyser",
    //   icon: IconReportMoney,
    // },
    {
      title: "Knowledge",
      url: "/app/knowledge",
      icon: IconBooks,
    },
    // {
    //   title: "Reports",
    //   url: "/app/reports",
    //   icon: IconReportAnalytics,
    // },
    // {
    //   title: "Analysis",
    //   url: "/app/analysis",
    //   icon: IconGraph,
    // },

    // {
    //   title: "Cards",
    //   url: "/app/cards",
    //   icon: IconGridDots,
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <svg
                viewBox="0 0 200 200"
                className=" h-12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2091_5)">
                  <path
                    d="M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0ZM100.1 50C99.9464 50 97.3983 58.7866 94.4375 69.5254L89.0547 89.0498L69.5996 94.4678C58.9102 97.4446 50.0978 99.9894 50.001 100.127C49.9216 100.26 58.6749 102.816 69.4531 105.807L89.0498 111.245L94.2109 130.01C97.0493 140.33 99.5536 149.266 99.7764 149.865C100.11 150.764 101.146 147.463 105.662 131.104L111.143 111.252L130.571 105.841C141.257 102.865 150 100.304 150 100.15C149.991 99.994 141.252 97.435 130.572 94.4609L111.145 89.0498L105.762 69.5254C102.802 58.7907 100.255 50.0068 100.1 50Z"
                    fill="#F59E0A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2091_5">
                    <rect width="200" height="200" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}

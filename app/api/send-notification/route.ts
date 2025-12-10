import { NextResponse } from "next/server";
import PushNotifications from "@pusher/push-notifications-server";

const beamsClient = new PushNotifications({
  instanceId: process.env.BEAMS_INSTANCE_ID!,
  secretKey: process.env.BEAMS_SECRET_KEY!,
});

export async function POST() {
  try {
    await beamsClient.publishToInterests(
      ["debug-hello"],
      notifications[Math.floor(Math.random() * notifications.length)]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: String(err) });
  }
}

const notifications = [
  {
    web: {
      notification: {
        title: "Infragen Reminder",
        body: "Revisit Infragen today — your AI-powered productivity boost awaits.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Boost Your Company",
        body: "Infragen can help your company improve instantly. Come back and try it now.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Need Efficiency?",
        body: "Infragen automates workflows and insights. Revisit and experience the upgrade.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Your Smart Assistant",
        body: "Infragen is ready with smarter suggestions. Return and explore new features.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Transform Your Ops",
        body: "Let Infragen optimize your operations. Come back and unlock improvements.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Discover Insights",
        body: "Infragen generates actionable insights for your team. Revisit to see more.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Welcome Back?",
        body: "Infragen has new improvements waiting. Return and boost your efficiency.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Improve Your Workflow",
        body: "Your AI tool Infragen can streamline tasks. Revisit and enhance performance.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "AI Upgrade Available",
        body: "Infragen is evolving — come back to experience upgraded AI insights.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Your AI Partner",
        body: "Infragen is ready to help improve your company processes. Return anytime.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Stay Ahead",
        body: "Use Infragen to stay ahead with real-time intelligent recommendations. Revisit now.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Optimize Today",
        body: "Infragen can help optimize your daily operations. Visit again to continue.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Improve Team Output",
        body: "Encourage your team with AI-powered tools from Infragen. Come back and explore.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Your AI Dashboard Awaits",
        body: "Return to Infragen to view new insights and performance metrics.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Smart Tools Ready",
        body: "Infragen tools are ready to help boost efficiency across your company. Revisit now.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "AI That Works for You",
        body: "Let Infragen handle repetitive work. Return to continue improving operations.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Level Up Productivity",
        body: "Your company can achieve more with Infragen. Revisit and unlock AI-powered insights.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Your Daily AI Boost",
        body: "Start your day with smarter tools — revisit Infragen now.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "AI Improvements Waiting",
        body: "Infragen has new optimizations ready for you. Come back and check them out.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
  {
    web: {
      notification: {
        title: "Enhance Your Strategy",
        body: "Use Infragen to improve company strategy through intelligent insights. Revisit today.",
        icon: "https://infra-ai-dun.vercel.app/logo.svg",
      },
      data: { url: "https://infra-ai-dun.vercel.app/app" },
    },
  },
];

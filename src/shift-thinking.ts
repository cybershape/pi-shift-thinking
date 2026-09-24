import type { ExtensionAPI, ExtensionContext } from "@earendil-works/pi-coding-agent";
import { getSupportedThinkingLevels } from "@earendil-works/pi-ai";

type ThinkingLevel = Parameters<ExtensionAPI["setThinkingLevel"]>[0];

const FALLBACK_LEVELS: ThinkingLevel[] = [
  "off",
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
];

export default function (pi: ExtensionAPI) {
  function adjustThinking(direction: "up" | "down", ctx: ExtensionContext) {
    const model = ctx.model;
    if (!model?.reasoning) {
      ctx.ui.notify("Current model does not support thinking", "warning");
      return;
    }

    let levels: ThinkingLevel[];
    try {
      levels = getSupportedThinkingLevels(model) as ThinkingLevel[];
    } catch {
      levels = [...FALLBACK_LEVELS];
    }

    if (!levels || levels.length === 0) {
      ctx.ui.notify("No available thinking levels for current model", "warning");
      return;
    }

    const current = pi.getThinkingLevel();
    let idx = levels.indexOf(current);
    if (idx === -1) {
      idx = 0;
    }

    const newIdx =
      direction === "up"
        ? Math.min(idx + 1, levels.length - 1)
        : Math.max(idx - 1, 0);

    const newLevel = levels[newIdx];
    if (newLevel === current) {
      ctx.ui.notify(
        `Thinking level already at ${direction === "up" ? "max" : "min"} (${current})`,
        "info"
      );
      return;
    }

    pi.setThinkingLevel(newLevel);
    ctx.ui.notify(`Thinking level: ${newLevel}`, "info");
  }

  pi.registerShortcut("shift+up", {
    description: "Increase thinking level",
    handler: async (ctx) => {
      adjustThinking("up", ctx);
    },
  });

  pi.registerShortcut("shift+down", {
    description: "Decrease thinking level",
    handler: async (ctx) => {
      adjustThinking("down", ctx);
    },
  });
}

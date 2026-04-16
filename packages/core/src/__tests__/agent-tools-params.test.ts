import { describe, it, expect } from "vitest";
import { createSubAgentTool } from "../agent/agent-tools.js";

describe("SubAgentParams schema", () => {
  const mockPipeline = {} as any;
  const tool = createSubAgentTool(mockPipeline, null);
  const schema = tool.parameters;
  const props = (schema as any).properties;

  it("has architect params: title, genre, platform, language, targetChapters", () => {
    expect(props.title).toBeDefined();
    expect(props.genre).toBeDefined();
    expect(props.platform).toBeDefined();
    expect(props.language).toBeDefined();
    expect(props.targetChapters).toBeDefined();
  });

  it("has writer/architect param: chapterWordCount", () => {
    expect(props.chapterWordCount).toBeDefined();
  });

  it("has reviser param: mode", () => {
    expect(props.mode).toBeDefined();
  });

  it("has exporter params: format, approvedOnly", () => {
    expect(props.format).toBeDefined();
    expect(props.approvedOnly).toBeDefined();
  });

  it("has existing params: agent, instruction, bookId, chapterNumber", () => {
    expect(props.agent).toBeDefined();
    expect(props.instruction).toBeDefined();
    expect(props.bookId).toBeDefined();
    expect(props.chapterNumber).toBeDefined();
  });

  it("all new params have description with agent scope", () => {
    expect(props.title.description).toMatch(/architect/i);
    expect(props.genre.description).toMatch(/architect/i);
    expect(props.mode.description).toMatch(/reviser/i);
    expect(props.format.description).toMatch(/exporter/i);
  });
});

import { JSDOM } from "jsdom";

const { window } = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.window = window;
global.document = window.document;

const { helloWorld } = require("./index");

test("displays 'Hello world' in the browser", () => {
  helloWorld();

  const outputElement = document.querySelector("p");
  expect(outputElement).not.toBeNull();
  expect(outputElement.innerText).toContain("Hello world");
});

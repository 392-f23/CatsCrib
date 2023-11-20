import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Roommate Number Filtering", () => {
  describe("When 2-roommate is selected", () => {
    it("Only displays room with 2 roommates", async () => {
      const user = userEvent.setup();
      const app = render(<App />);

      // Click on the 'Roommates' filter button
      const roommateFilterButton = screen.getByText(/Roommates/i);
      expect(roommateFilterButton).toBeInTheDocument();
      user.click(roommateFilterButton);

      // Select the 2-roommates option
      const roommateOption = await screen.findByRole("button", {
        name: /2/i,
      });
      expect(roommateOption).toBeInTheDocument();
      await user.click(roommateOption);

      // Selects CSS classes named card-title
      const cardTitlesOnDisplay = app.container.querySelectorAll(".card-title");

      // Assert only 2-roommate rooms displayed
      Array.from(cardTitlesOnDisplay).forEach((node) =>
        expect(node.roommate).toContain("2")
      );
    });
  });
});
// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { describe, expect, it, vi } from "vitest";
// import userEvent from "@testing-library/user-event";
// import App from "../App";

// describe("Roommate Number Filtering Reset", () => {
//   describe("When no filter is selected", () => {
//     it("displays all rooms", async () => {
//       const user = userEvent.setup();
//       const app = render(<App />);

//       // Click on the 'Roommates' filter button
//       const roommateFilterButton = screen.getByText(/Roommates/i);
//       expect(roommateFilterButton).toBeInTheDocument();
//       user.click(roommateFilterButton);

//       // Select the 2-roommates option
//       const roommateOption = await screen.findByRole("button", {
//         name: /2/i,
//       });
//       expect(roommateOption).toBeInTheDocument();
//       await user.click(roommateOption);

//       // Selects CSS classes named card-title
//       const cardTitlesOnDisplay = app.container.querySelectorAll(".card-title");

//       // Assert only 2-roommate rooms displayed
//       Array.from(cardTitlesOnDisplay).forEach((node) =>
//         expect(node.roommate).toContain("2")
//       );

//       // Click on the 'Roommates' filter button
//       roommateFilterButton = screen.getByText(/Roommates/i);
//       expect(roommateFilterButton).toBeInTheDocument();
//       user.click(roommateFilterButton);

//       // Select the 3-roommates option
//       roommateOption = await screen.findByRole("button", {
//         name: /3/i,
//       });
//       expect(roommateOption).toBeInTheDocument();
//       await user.click(roommateOption);

//       // Selects CSS classes named card-title
//       cardTitlesOnDisplay = app.container.querySelectorAll(".card-title");

//       // Assert only 3-roommate rooms displayed
//       Array.from(cardTitlesOnDisplay).forEach((node) =>
//         expect(node.roommate).toContain("3")
//       );

//     });
//   });
// });
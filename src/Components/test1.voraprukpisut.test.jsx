import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Posting from "./Posting";
import MoreInfo from "./MoreInfo";

describe("Posting component tests", () => {
  const mockData = {
    address: {
      city: "Fake City",
      state: "Fake State",
      street: "Fake Street",
    },
    apt_number: "Fake Apt",
    category: "sublet",
    end_date: "2023-10-03",
    id: "-NhAILbwP1VE4cx1nGKT",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/catscrib.appspot.com/o/images%2F68845981_20d8de30ca61d57882e16a6adfa632d1.jpg_1697775445389?alt=media&token=5e0fa859-7980-40ff-b144-49bd24166a1a",
    ],
    more_info: "Fake More Info Text",
    price: "2200",
    roommates: "12",
    start_date: "2023-10-02",
    type: "house",
    unit: "1br",
    user: "PSchlOxTAVOUIpvaLT2JaM4X2lt1",
  };

  const mockToggleHeart = vi.fn();
  const isFaved = false;

  beforeEach(() => {
    render(
      <Posting
        data={mockData}
        index={0}
        toggleHeart={mockToggleHeart}
        isFaved={isFaved}
      />
    );
  });

  it("should display More Info component when More Info button is clicked", async () => {
    // Find the More Info button
    const moreInfoButton = screen.getByText(/more info\.\.\./i);
    expect(moreInfoButton).toBeInTheDocument();

    // Click the More Info button
    fireEvent.click(moreInfoButton);

    // Expect the More Info component to be in the document
    const moreInfoComponent = screen.queryByText('Fake More Info Text');
    expect(moreInfoComponent).toBeInTheDocument();
  });
});

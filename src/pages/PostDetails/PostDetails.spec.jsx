/* eslint-env jest */
import { beforeEach, it, describe, expect, jest } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import { useParams, useNavigate } from "react-router-dom";
import usePost from "./hooks/usePost";
import Post from "./index";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

jest.mock("./hooks/usePost");
jest.mock("@compounds/postDetail", () => (props) => (
  <div data-testid="post-detail">{JSON.stringify(props.post)}</div>
));
jest.mock("lucide-react", () => ({
  Loader2: () => <div data-testid="loader">Loading...</div>,
}));

describe("Post Component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
    mockNavigate.mockReset();
  });

  it("should display loader while loading", () => {
    useParams.mockReturnValue({ id: "1" });
    usePost.mockReturnValue({ isLoading: true, data: null, error: null });

    render(<Post />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should navigate to error page when there's an error", () => {
    useParams.mockReturnValue({ id: "1" });
    usePost.mockReturnValue({
      error: new Error("Failed to fetch"),
      isLoading: false,
      data: null,
    });

    render(<Post />);
    expect(mockNavigate).toHaveBeenCalledWith("/error", { replace: true });
  });

  it("should display 'No posts!' when post is not available", () => {
    useParams.mockReturnValue({ id: "1" });
    usePost.mockReturnValue({ isLoading: false, data: null, error: null });

    render(<Post />);
    expect(screen.getByText("No posts!")).toBeInTheDocument();
  });

  it("should render PostDetail when post is available", () => {
    const mockPost = { id: "1", title: "Test Post" };
    useParams.mockReturnValue({ id: "1" });
    usePost.mockReturnValue({ data: mockPost, isLoading: false, error: null });

    render(<Post />);

    const postDetail = screen.getByTestId("post-detail");
    expect(postDetail).toBeInTheDocument();
    expect(postDetail.textContent).toContain(JSON.stringify(mockPost));
  });

  it("should call usePost with correct id from URL params", () => {
    const testId = "123";
    useParams.mockReturnValue({ id: testId });

    render(<Post />);

    expect(usePost).toHaveBeenCalledWith(testId);
  });
});

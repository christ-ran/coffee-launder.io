import localFont from "next/font/local";

export const std_emberly = localFont({
  src: [
    {
      path: "../public/fonts/emberly/standard-thin.ttf",
      weight: "100"
    },
    {
      path: "../public/fonts/emberly/standard-extra-light.ttf",
      weight: "200"
    },
    {
      path: "../public/fonts/emberly/standard-light.ttf",
      weight: "300"
    },
    {
      path: "../public/fonts/emberly/standard-regular.ttf",
      weight: "400"
    },
    {
      path: "../public/fonts/emberly/standard-medium.ttf",
      weight: "500"
    },
    {
      path: "../public/fonts/emberly/standard-semi-bold.ttf",
      weight: "600"
    },
    {
      path: "../public/fonts/emberly/standard-bold.ttf",
      weight: "700"
    },
    {
      path: "../public/fonts/emberly/standard-extra-bold.ttf",
      weight: "800"
    },
    {
      path: "../public/fonts/emberly/standard-black.ttf",
      weight: "900"
    }
  ],
  variable: "--std-emberly"
});

export const narrow_emberly = localFont({
  src: [
    {
      path: "../public/fonts/emberly/narrow-thin.ttf",
      weight: "100"
    },
    {
      path: "../public/fonts/emberly/narrow-extra-light.ttf",
      weight: "200"
    },
    {
      path: "../public/fonts/emberly/narrow-light.ttf",
      weight: "300"
    },
    {
      path: "../public/fonts/emberly/narrow-regular.ttf",
      weight: "400"
    },
    {
      path: "../public/fonts/emberly/narrow-medium.ttf",
      weight: "500"
    },
    {
      path: "../public/fonts/emberly/narrow-semi-bold.ttf",
      weight: "600"
    },
    {
      path: "../public/fonts/emberly/narrow-bold.ttf",
      weight: "700"
    },
    {
      path: "../public/fonts/emberly/narrow-extra-bold.ttf",
      weight: "800"
    },
    {
      path: "../public/fonts/emberly/narrow-black.ttf",
      weight: "900"
    }
  ],
  variable: "--narrow-emberly"
});

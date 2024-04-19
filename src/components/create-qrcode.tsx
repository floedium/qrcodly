"use client";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Input } from "./ui/input";
import { SettingsForm } from "./generator/SettingsForm";
import {
  type DrawType,
  type TypeNumber,
  type Mode,
  type ErrorCorrectionLevel,
  type DotType,
  type CornerSquareType,
  type CornerDotType,
  type Options,
} from "qr-code-styling";
import { Suspense, useState } from "react";
import dynamic from "next/dynamic";


const QrCode = dynamic(() => import("./generator/QrCode"), {
  ssr: false,
});

export const CreateQRcode = () => {
  const [qrCodeSettings, setQrCodeSettings] = useState<Options>({
    width: 300,
    height: 300,
    type: "svg" as DrawType,
    data: "https://example.com",
    image: "/favicon.ico",
    margin: 10,
    qrOptions: {
      typeNumber: 0 as TypeNumber,
      mode: "Byte" as Mode,
      errorCorrectionLevel: "Q" as ErrorCorrectionLevel,
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: "anonymous",
    },
    dotsOptions: {
      color: "#222222",
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 0,
      //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
      // },
      type: "rounded" as DotType,
    },
    backgroundOptions: {
      color: "#ffffff",
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 0,
      //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
      // },
    },
    cornersSquareOptions: {
      color: "#222222",
      type: "extra-rounded" as CornerSquareType,
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 180,
      //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
      // },
    },
    cornersDotOptions: {
      color: "#222222",
      type: "dot" as CornerDotType,
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 180,
      //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
      // },
    },
  });

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow min-h-[600px]">
      <div className="px-4 py-5 sm:px-6">
        <Input placeholder="Enter URL https://example.com/" />
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="flex">
          <div className="flex-1">
            <SettingsForm
              settings={qrCodeSettings}
              onChange={(d) => {
                console.log("change",d);
              }}
            />
          </div>
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <QrCode settings={qrCodeSettings} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

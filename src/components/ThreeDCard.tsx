"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white dark:bg-neutral-900 shadow-lg border dark:border-neutral-700 w-full max-w-md mx-auto mb-10 rounded-xl p-4">
        <CardItem translateZ="50" className="flex items-center gap-4">
          <img
            src="/assets/pu.png"
            alt="Presidency University Logo"
            width={64}
            height={64}
            className="rounded-md"
          />

          <div>
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-white">
              Presidency University, Bangalore
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              B.Tech in Computer Science & Engineering <br />
              Class of 2025
            </p>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

"use client"
// import { useState } from 'react'
import Image from 'next/image'
import { Card } from "@geist-ui/core"

export default function Projects() {
  return (
    <div id="projects" className="bg-white min-h-screen max-h-screen">
      <div className="mx-auto max-w-3xl py-16 sm:py-24 lg:py-32">
        <div>
          <h1 className="text-4xl font-bold text-center tracking-tight text-gray-900 sm:text-6xl">
            Portfolio
          </h1>
          <div className="hidden mt-6 sm:flex">
            <Card shadow>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Image
                    src="/duke890.png"
                    alt="Duke 890"
                    width={918}
                    height={629}
                    priority
                  />
                </div>
                <div className="text-center my-auto">
                  <h1 className="text-1xl font-bold text-center tracking-tight text-gray-900 sm:text-2xl">
                    Motorcycle Rental
                  </h1>
                  <p className="mt-2 leading-8 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel neque venenatis, volutpat metus et, posuere massa. Suspendisse justo justo, pulvinar quis varius a, accumsan id dui. Ut sed erat.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
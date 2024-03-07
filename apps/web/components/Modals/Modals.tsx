"use client"

import dynamic from "next/dynamic"
import React from "react"
import { useModalStore } from "stores/modalStore"

const LoginModal = dynamic(() => import("./LoginModal").then((m) => m.LoginModal), { loading: Placeholder })
const SignupModal = dynamic(() => import("./SignupModal").then((m) => m.SignupModal), { loading: Placeholder })

export function Modals() {
  const modals = useModalStore((s) => s.modals)

  return (
    <>
      {Object.entries(modals).map(([key, value]) => {
        return (
          <React.Fragment key={key}>
            {key === "login" && !!value ? <LoginModal key="login" /> : null}
            {key === "signup" && !!value ? <SignupModal key="signup" /> : null}
          </React.Fragment>
        )
      })}
    </>
  )
}

function Placeholder() {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-[4px]"></div>
}

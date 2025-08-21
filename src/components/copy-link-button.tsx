'use client'

import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface CopyLinkButtonProps {
  commandName: string
}

export function CopyLinkButton({ commandName }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = () => {
    const url = `${window.location.origin}${window.location.pathname}#${commandName.replace('/', '')}`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="opacity-0 group-hover:opacity-100 transition-opacity"
    >
      {copied ? (
        <span className="text-xs">Copied!</span>
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  )
}
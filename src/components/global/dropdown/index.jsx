"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Download, ImageDown, Image as ImageIcon, Loader2 } from "lucide-react";
import { trackDownload, trackCTAClick, trackInitiateCheckout } from "@/lib/analytics";

export default function DownloadDropdown({
  title = "Image",
  withWatermarkUrl,
  withoutWatermarkUrl,
}) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async (url, fileName) => {
    try {
      setLoading(true);
      trackDownload({
        fileName: fileName,
        imageTitle: title,
        type: "with_watermark",
      });

      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveWatermarkClick = () => {
    trackCTAClick("Remove Watermark", "Image Card Dropdown", withoutWatermarkUrl);
    trackInitiateCheckout({
      planKey: "remove_watermark",
      planName: `Remove Watermark - ${title}`,
      amount: 0,
      currency: "INR",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={loading}
          aria-label="Download image options"
          className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Download className="w-5 h-5" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-60 rounded-xl shadow-xl border border-emerald-100 bg-white p-2 animate-slide-down"
      >
        <DropdownMenuItem
          onClick={() => handleDownload(withWatermarkUrl, `${title}.jpg`)}
          className="flex items-center gap-3 rounded-lg px-4 py-2.5 cursor-pointer transition-all duration-200 hover:bg-emerald-50 text-gray-800"
        >
          <ImageDown className="w-5 h-5 text-emerald-600" />
          <span className="text-sm font-medium">
            Download
          </span>
        </DropdownMenuItem>

        {withoutWatermarkUrl && (
          <a
            href={withoutWatermarkUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleRemoveWatermarkClick}
          >
            <DropdownMenuItem className="flex items-center gap-3 rounded-lg px-4 py-2.5 cursor-pointer transition-all duration-200 hover:bg-green-50 text-gray-800">
              <ImageIcon className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">
                Remove Watermark
              </span>
            </DropdownMenuItem>
          </a>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

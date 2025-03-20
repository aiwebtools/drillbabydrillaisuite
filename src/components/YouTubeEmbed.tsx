
import React, { useEffect, useRef } from "react";
import { GlassCard } from "./ui-custom/GlassCard";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ 
  videoId = "dQw4w9WgXcQ", // Default video (Rick Roll) if none provided
  title = "DRILL BABY DRILL AI SUITE Demo",
  className = ""
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Add YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Play video when it's in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play video when it's visible
            if (iframeRef.current && iframeRef.current.src) {
              // Ensure autoplay parameter is included
              if (!iframeRef.current.src.includes('autoplay=1')) {
                iframeRef.current.src += '&autoplay=1';
              }
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <GlassCard variant="dark" className={`overflow-hidden rounded-xl aspect-video ${className}`}>
      <iframe 
        ref={iframeRef}
        width="100%" 
        height="100%" 
        src={`https://www.youtube.com/embed/${videoId}?mute=0&controls=1&origin=https://example.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1&hd=1&vq=hd1080`}
        title={title}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </GlassCard>
  );
};

export default YouTubeEmbed;

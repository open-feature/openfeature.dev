import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

function VideoEmbed({ videoId, title = "YouTube video player" }: VideoEmbedProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto">
            <LiteYouTubeEmbed id={videoId} title={title} poster="maxresdefault" webp />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoEmbed;

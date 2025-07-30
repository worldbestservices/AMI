// components/YouTubePlayerWithOverlay.tsx
import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubePlayerWithOverlay() {
  const playerRef = useRef<any>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('yt-player', {
        videoId: 'vNXglsMoGvM',
        events: {
          onReady: () => {
            setPlayerReady(true);
          },
        },
        playerVars: {
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
      });
    };
  }, []);

  const handlePlay = () => {
    if (playerRef.current && playerReady) {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto mt-16"
    >
      <div className="holographic-card p-8 text-center">
        <h2 className="text-3xl font-orbitron font-bold text-gradient-gold mb-4">
          Watch Our Tutorial
        </h2>
        <p className="text-gray-400 font-rajdhani mb-8">
          Follow along with our step-by-step video guide
        </p>

        <div className="relative rounded-cyber overflow-hidden" style={{ width: '100%', maxWidth: '560px', margin: '0 auto' }}>
          <div id="yt-player" className="w-full h-[315px] rounded-cyber"></div>
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 cursor-pointer" onClick={handlePlay}>
              <button className="w-20 h-20 bg-electric-gold/20 rounded-full flex items-center justify-center hover:bg-electric-gold/30 transition-all duration-300 hover:scale-110">
                <Play className="w-8 h-8 text-electric-gold ml-1" />
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button onClick={handlePlay} className="cyber-button rounded-cyber py-3 px-8">
            <div className='flex justify-center items-center gap-2'>
              <Play className="w-4 h-4" />
              <span>Watch Tutorial</span>
            </div>
          </button>
          <button
            onClick={() => window.open('https://your-site.com/guide.pdf')}
            className="glass-panel border-glow-purple px-6 py-3 rounded-cyber hover:scale-105 transition-all duration-300"
          >
            <span className="font-rajdhani">Download Guide</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Header } from './components/Header';
import { CinemaView } from './components/CinemaView';
import { FullView } from './components/FullView';
import { CinemaControls } from './components/CinemaControls';
import { PetalsCanvas } from './components/PetalsCanvas';
import { StarField } from './components/StarField';
import { ShareModal } from './components/ShareModal';
import { SCENES_META } from './data';

export default function App() {
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isFullView, setIsFullView] = useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

  const totalScenes = SCENES_META.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Jump to specific scene
  const goToScene = useCallback((index: number) => {
    if (index < 0 || index >= totalScenes) return;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setCurrentScene(index);
  }, [totalScenes]);

  const nextScene = useCallback(() => {
    goToScene(currentScene < totalScenes - 1 ? currentScene + 1 : 0);
  }, [currentScene, totalScenes, goToScene]);

  const prevScene = useCallback(() => {
    goToScene(currentScene > 0 ? currentScene - 1 : totalScenes - 1);
  }, [currentScene, totalScenes, goToScene]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const replayShow = useCallback(() => {
    setIsFullView(false);
    setIsPlaying(true);
    goToScene(0);
  }, [goToScene]);

  // Timer loop for auto-advancing scenes
  useEffect(() => {
    if (isFullView || !isPlaying) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    const currentMeta = SCENES_META[currentScene];
    const duration = currentMeta ? currentMeta.durationMs : 9000;

    timerRef.current = setTimeout(() => {
      if (currentScene < totalScenes - 1) {
        goToScene(currentScene + 1);
      } else {
        // Grand finale reached: pause to let user view
        setIsPlaying(false);
      }
    }, duration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [currentScene, isPlaying, isFullView, totalScenes, goToScene]);

  // Pause playback when tab is backgrounded
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying) {
        setIsPlaying(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isPlaying]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlayPause();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        nextScene();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        prevScene();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlayPause, nextScene, prevScene]);

  // Mobile Touch Swipe Navigation
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        nextScene();
      } else {
        prevScene();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      id="app"
      className="relative min-h-screen bg-[#050814] text-[#FAF8F5] flex flex-col justify-between overflow-x-hidden font-sans selection:bg-[#D4AF37] selection:text-[#070B19]"
      onTouchStart={!isFullView ? handleTouchStart : undefined}
      onTouchEnd={!isFullView ? handleTouchEnd : undefined}
    >
      {/* Visual Canvas Effects */}
      <PetalsCanvas />
      <StarField />

      {/* Top Royal HUD / Header */}
      <Header
        isFullView={isFullView}
        onToggleView={() => {
          setIsFullView((prev) => !prev);
          if (!isFullView) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onOpenShareModal={() => setIsShareModalOpen(true)}
      />

      {/* Content Area */}
      {isFullView ? (
        <FullView
          onSwitchToFilm={() => {
            setIsFullView(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onGoToSceneInFilm={(sceneIdx) => {
            setIsFullView(false);
            goToScene(sceneIdx);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <>
          <CinemaView
            currentScene={currentScene}
            onGoToScene={goToScene}
            onReplay={replayShow}
            isPlaying={isPlaying}
          />

          {/* Bottom Persistent Timeline Controls */}
          <CinemaControls
            currentScene={currentScene}
            totalScenes={totalScenes}
            isPlaying={isPlaying}
            onGoToScene={goToScene}
            onTogglePlay={togglePlayPause}
            onNext={nextScene}
            onPrev={prevScene}
            onReplay={replayShow}
            onSwitchToFull={() => {
              setIsFullView(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </>
      )}

      {/* Share / Royal Pass Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, X, Volume2, Settings2 } from "lucide-react";
import Link from "next/link";
import styles from "./ImmersivePlayer.module.css";

interface Session {
    id: string;
    title: string;
    background: string;
    duration: number; // in seconds
}

export default function ImmersivePlayer({ session }: { session: Session }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showControls, setShowControls] = useState(true);

    // Simulation of playback
    useEffect(() => {
        let interval: any;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= session.duration) {
                        setIsPlaying(false);
                        return 0;
                    }
                    return prev + 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, session.duration]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className={styles.container}>
            {/* Background Layer */}
            <div className={styles.backgroundLayer}>
                <Image
                    src={session.background}
                    alt="Atmosphere"
                    fill
                    className={styles.backgroundImage}
                    style={{ transform: isPlaying ? 'scale(1.2)' : 'scale(1.0)' }}
                    priority
                />
                <div className={styles.backgroundOverlay} />
            </div>

            {/* Main Content Area */}
            <div className={styles.content}>
                <div className={styles.closeBtn}>
                    <Link href="/">
                        <X size={20} color="white" />
                    </Link>
                </div>

                {/* Breathing Visual / Focus Point */}
                <div className={styles.breathingCircle} style={{
                    transform: isPlaying ? 'scale(1.25)' : 'scale(1)',
                    borderColor: isPlaying ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)'
                }}>
                    <div className={styles.innerGlow} style={{
                        opacity: isPlaying ? 0.8 : 0.4,
                        transform: isPlaying ? 'scale(1.1)' : 'scale(0.9)'
                    }} />
                </div>

                <div className={styles.titleArea}>
                    <h2 className={styles.title}>{session.title}</h2>
                    <p className={styles.subtitle}>Auto-Hypnose Guidée</p>
                </div>
            </div>

            {/* Controls */}
            <div className={styles.controls} style={{
                transform: showControls ? 'translateY(0)' : 'translateY(100%)',
                opacity: showControls ? 1 : 0
            }}>

                {/* Progress Bar */}
                <div className={styles.progressContainer}>
                    <div className={styles.progressBar}>
                        <div
                            className={styles.progressFill}
                            style={{ width: `${(progress / session.duration) * 100}%` }}
                        />
                    </div>
                    <div className={styles.timeLabels}>
                        <span>{formatTime(progress)}</span>
                        <span>{formatTime(session.duration)}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className={styles.actions}>
                    <button className={styles.iconBtn}>
                        <Settings2 size={24} />
                    </button>

                    <button
                        onClick={togglePlay}
                        className={styles.playBtn}
                    >
                        {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" style={{ marginLeft: '4px' }} />}
                    </button>

                    <button className={styles.iconBtn}>
                        <Volume2 size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}

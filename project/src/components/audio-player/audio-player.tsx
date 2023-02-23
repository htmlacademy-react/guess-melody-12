import {Fragment, useState, useEffect, useRef} from 'react';

type AudioPlayerProps = {
  autoPlay: boolean;
  src: string;
}

function AudioPlayer({autoPlay, src}: AudioPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let isAudioPlayerMounted = true;

    if (audioRef.current === null) {
      return;
    }

    audioRef.current.addEventListener('loadeddata', () => {
      if (isAudioPlayerMounted) {
        setIsLoading(false);
      }
    });

    if (isPlaying) {
      audioRef.current.play();
      return;
    }

    audioRef.current.pause();

    return () => {
      isAudioPlayerMounted = false;
    };
  }, [isPlaying]);

  return (
    <Fragment>
      <button
        className="track__button track__button--play"
        type="button"
        disabled={isLoading}
        onClick={() => setIsPlaying(!isPlaying)}
      />
      <div className="track__status">
        <audio src={src} ref={audioRef} />
      </div>
    </Fragment>
  );
}

export default AudioPlayer;

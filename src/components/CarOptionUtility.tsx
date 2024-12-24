//피드백 2차 2번//
//피드백 2차 3번//

import React, { useState, useRef } from 'react';
import '../styles/ProductReservation.css';
import {
  Battery,
  Drive,
  Sound,
  BATTERY_PRICE_MAP,
  DRIVE_PRICE_MAP,
  SOUND_PRICE_MAP,
  SOUND_LINKS,
} from '../types/carOptionTypes';

interface CarOptionProps {
  onColorChange: (color: string) => void;
}

const CarOption: React.FC<CarOptionProps> = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedBattery, setSelectedBattery] = useState<Battery | null>(null);
  const [selectedDrive, setSelectedDrive] = useState<Drive | null>(null);
  const [selectedSound, setSelectedSound] = useState<Sound | null>(null);
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const totalPrice =
    (selectedBattery ? BATTERY_PRICE_MAP['utility'][selectedBattery] : 0) +
    (selectedDrive ? DRIVE_PRICE_MAP['utility'][selectedDrive] : 0) +
    (selectedSound ? SOUND_PRICE_MAP[selectedSound] : 0);

  const handleAudioPlayPause = (id: Sound, sound: string) => {
    if (currentPlayingId === id && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setCurrentPlayingId(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const newAudio = new Audio(sound);
    audioRef.current = newAudio;
    newAudio.play();
    setCurrentPlayingId(id);
  };

  const handleSubmit = () => {
    if (!selectedBattery || !selectedDrive || !selectedSound) {
      alert('모든 옵션을 선택해주세요.');
    } else {
      alert('예약되었습니다.');
    }
  };

  return (
    <div className="productreservation-right-panel">
      <h2 className="productreservation-midtitle">Color</h2>
      <div className="color-buttons">
        {['#18520c', '#d9b718', '#b82729', '#1149a6'].map((col, index) => (
          <button
            key={index}
            onClick={() => onColorChange(col)}
            style={{
              backgroundColor: col,
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              border: 'none',
            }}
          />
        ))}
      </div>

      <h2 className="productreservation-midtitle">Battery Type</h2>
      <div className="option-grid">
        {Object.values(Battery).map((battery) => (
          <div
            key={battery}
            className={`option-item ${
              selectedBattery === battery ? 'selected-option' : ''
            }`}
            onClick={() => setSelectedBattery(battery)}
          >
            <span className="option-text">{battery}</span>
            <span className="option-price">
              +{BATTERY_PRICE_MAP['utility'][battery]?.toLocaleString() || '0'}원
            </span>
          </div>
        ))}
      </div>

      <h2 className="productreservation-midtitle">Drive Type</h2>
      <div className="option-grid">
        {Object.values(Drive).map((drive) => (
          <div
            key={drive}
            className={`option-item ${
              selectedDrive === drive ? 'selected-option' : ''
            }`}
            onClick={() => setSelectedDrive(drive)}
          >
            <span className="option-text">{drive}</span>
            <span className="option-price">
              +{DRIVE_PRICE_MAP['utility'][drive]?.toLocaleString() || '0'}원
            </span>
          </div>
        ))}
      </div>

      <h2 className="productreservation-midtitle">Virtual Engine Sound</h2>
      <div className="option-grid">
        {Object.values(Sound).map((sound) => (
          <div
            key={sound}
            className={`option-item ${
              selectedSound === sound ? 'selected-option' : ''
            }`}
            onClick={() => setSelectedSound(sound)}
          >
            <span className="option-text">{sound}</span>
            <button
              className="audio-button"
              onClick={(e) => {
                e.stopPropagation();
                handleAudioPlayPause(sound, SOUND_LINKS[sound]);
              }}
            >
              <img
                src={
                  currentPlayingId === sound
                    ? '/images/ProductReservation/pause.svg'
                    : '/images/ProductReservation/play.svg'
                }
                alt={currentPlayingId === sound ? 'Pause' : 'Play'}
              />
            </button>
            <span className="option-price">
              +{SOUND_PRICE_MAP[sound].toLocaleString()}원
            </span>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <div className="total-price-container">
        <h2 className="productreservation-midtitle">
          Total&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="total-price">{totalPrice.toLocaleString()}원</span>
        </h2>
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default CarOption;

import React, { useState, useRef } from 'react';
import '../../styles/ProductReservation.css';

interface CarOptionProps {
  onColorChange: (color: string) => void;
}

const CarOption: React.FC<CarOptionProps> = ({ onColorChange }) => {
  const [_selectedColor, _setSelectedColor] = useState<string | null>(null);
  const [selectedBattery, setSelectedBattery] = useState<string | null>(null);
  const [selectedDrive, setSelectedDrive] = useState<string | null>(null);
  const [selectedSound, setSelectedSound] = useState<string | null>(null);
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null); // 현재 재생 중인 사운드 ID
  const audioRef = useRef<HTMLAudioElement | null>(null); // 현재 재생 중인 오디오를 관리

  const totalPrice =
    (selectedBattery === 'Standard'
      ? 27750000
      : selectedBattery === 'Long Range'
        ? 30350000
        : 0) +
    (selectedDrive === '2WD' ? 0 : selectedDrive === 'AWD' ? 2500000 : 0) +
    (selectedSound === 'Analog1' || selectedSound === 'Analog2' ? 500000 : 0);

  const handleAudioPlayPause = (id: string, sound: string) => {
    // 동일한 버튼을 누르면 재생 중단
    if (currentPlayingId === id && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setCurrentPlayingId(null);
      return;
    }

    // 새로운 버튼을 누르면 기존 오디오 정지 후 새로운 오디오 재생
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const newAudio = new Audio(sound);
    audioRef.current = newAudio;
    newAudio.play();
    setCurrentPlayingId(id); // 현재 재생 중인 ID 업데이트
  };

  const handleSubmit = () => {
    alert('예약되었습니다.');
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
        <div
          className={`option-item ${selectedBattery === 'Standard' ? 'selected-option' : ''}`}
          onClick={() => setSelectedBattery('Standard')}
        >
          <span className="option-text">Standard (356 km)</span>
          <span className="option-price">+27,750,000원</span>
        </div>
        <div
          className={`option-item ${selectedBattery === 'Long Range' ? 'selected-option' : ''}`}
          onClick={() => setSelectedBattery('Long Range')}
        >
          <span className="option-text">Long Range (468 km)</span>
          <span className="option-price">+30,350,000원</span>
        </div>
      </div>

      <h2 className="productreservation-midtitle">Drive Type</h2>
      <div className="option-grid">
        <div
          className={`option-item ${selectedDrive === '2WD' ? 'selected-option' : ''}`}
          onClick={() => setSelectedDrive('2WD')}
        >
          <span className="option-text">Two-Wheel Drive (2WD)</span>
          <span className="option-price">+0원</span>
        </div>
        <div
          className={`option-item ${selectedDrive === 'AWD' ? 'selected-option' : ''}`}
          onClick={() => setSelectedDrive('AWD')}
        >
          <span className="option-text">All-Wheel Drive (AWD)</span>
          <span className="option-price">+2,500,000원</span>
        </div>
      </div>

      {/* Virtual Engine Sound */}
      <h2 className="productreservation-midtitle">Virtual Engine Sound</h2>
      <div className="option-grid">
        {[
          {
            id: 'Analog1',
            label: 'Analog type 1',
            price: '+500,000원',
            sound: '/videos/ford-mustang-engine-1985-78386.mp3',
          },
          {
            id: 'Analog2',
            label: 'Analog type 2',
            price: '+500,000원',
            sound: '/videos/lambo-start-up-sound-26364.mp3',
          },
          {
            id: 'Default',
            label: 'Default EV Sound',
            price: '+0원',
            sound: '/videos/electric-vehicle-car-general-m.m4a',
          },
        ].map(({ id, label, price, sound }) => (
          <div
            key={id}
            className={`option-item ${selectedSound === id ? 'selected-option' : ''}`}
            onClick={() => setSelectedSound(id)}
          >
            <span className="option-text">{label}</span>
            <button
              className="audio-button"
              onClick={(e) => {
                e.stopPropagation();
                handleAudioPlayPause(id, sound); // 재생 또는 일시 정지
              }}
            >
              <img
                src={
                  currentPlayingId === id
                    ? '/images/ProductReservation/pause.svg'
                    : '/images/ProductReservation/play.svg'
                }
                alt={currentPlayingId === id ? 'Pause' : 'Play'}
              />
            </button>
            <span className="option-price">{price}</span>
          </div>
        ))}
      </div>
      <hr className="divider" />

      <div className="total-price-container">
        <h2 className="productreservation-midtitle">
          Total&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
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

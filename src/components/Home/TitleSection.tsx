import { forwardRef } from 'react';

interface TitleSectionProps {
  text: string;
  isVisible: boolean;
}

const TitleSection = forwardRef<HTMLHeadingElement, TitleSectionProps>(
  ({ text, isVisible }, ref) => (
    <h1 className={`company-vision ${isVisible ? 'visible' : ''}`} ref={ref}>
      {text}
    </h1>
  ),
);

export default TitleSection;

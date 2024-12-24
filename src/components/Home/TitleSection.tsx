interface TitleSectionProps {
  text: string;
  isVisible: boolean;
  reference: React.RefObject<HTMLHeadingElement>;
}

const VisionSection = ({
  text,
  isVisible,
  reference,
}: TitleSectionProps): JSX.Element => (
  <h1
    className={`company-vision ${isVisible ? 'visible' : ''}`}
    ref={reference}
  >
    {text}
  </h1>
);

export default VisionSection;


const [imageSrc, setImageSrc] = useState("이미지경로");
const [isClicked, setClicked] = useState(false);

const handleClick = () => {
  if (isClicked) {
    setImageSrc("이미지경로");
      setIsClicked(false); //초기 상태 false 일 땐 초기 상태 이미지 
  } else {
    setImageSrc("이미지경로")
    setIsClicked(true); //true 일때 변경될 이미지 src
  }
};

return (
  <Image src={imageSrc} onClick={handleClick}/>
);

export default handleClick;
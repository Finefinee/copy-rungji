function Rungji({number}) {
  const imgPath = "/assets/rungji" + number + ".png";

  return (
    <div>
      <img src={imgPath} alt="" style={{ width: "4rem" }} />
    </div>
  );
}

export default Rungji;
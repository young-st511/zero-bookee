import AddAcountButton from "./AddAcountButton";

function AddAcount() {
  return (
    <div>
      <div className="add-menu">
        <div>계좌 추가</div>
        <div>부채 추가</div>
        <div>수익 추가</div>
        <div>지출 추가</div>
      </div>
      <AddAcountButton />
    </div>
  );
}

export default AddAcount;

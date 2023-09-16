
const Loading = ({ loading }) => {
  
  console.log(loading,"loading")
  return (
    <div className="text-lg text-center py-6">
      {/* <ClipLoader
        color={"#ffffff"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
      loading
    </div>
  );
};

export default Loading;

import DownloadVideoSection from "@/components/DownloadVideoSection/DownloadVideoSection";

const layout = ({ children }) => {
  return (
    <div>
      <DownloadVideoSection></DownloadVideoSection>
      {children}
    </div>
  );
};

export default layout;

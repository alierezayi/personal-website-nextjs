import useMediaQuery from "@/hooks/useMediaQuery";

const useDevice = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return { isMobile, isDesktop };
};

export default useDevice;

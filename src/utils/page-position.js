import { useRouter } from 'next/router';



export const handleClick = (e, path) => {
    const router = useRouter();
    e.preventDefault();
    window.scrollTo(0, 0);
    router.push(path);
  };
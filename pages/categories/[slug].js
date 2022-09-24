import { useRouter } from "next/router";

const CategoryPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <p>Category: {slug}</p>
  )
}

export default CategoryPage
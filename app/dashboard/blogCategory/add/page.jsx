import styles from "@/app/ui/dashboard/blogCategory/addblogCategory/addblogCategory.module.css";

const BlogCategoryPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Enter Blog Category" name="title" required />
        <button type="submit">Add Blog Category</button>
      </form>
    </div>
  )
}

export default BlogCategoryPage
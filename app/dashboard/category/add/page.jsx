import styles from "@/app/ui/dashboard/category/addCategory/addCategory.module.css";

const CategoryPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Title" name="title" required />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CategoryPage

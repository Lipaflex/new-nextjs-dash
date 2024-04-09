import styles from "@/app/ui/dashboard/blog/addBlog/addBlog.module.css";

const AddBlogPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="text" placeholder="image upload here" name="text" required />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddBlogPage

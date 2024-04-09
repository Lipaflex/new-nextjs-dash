import styles from "@/app/ui/dashboard/color/addColor/addColor.module.css";

const ColorPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Add a Color Palette here" name="title" required />
        
        <button type="submit">Add Color</button>
      </form>
    </div>
  )
}

export default ColorPage

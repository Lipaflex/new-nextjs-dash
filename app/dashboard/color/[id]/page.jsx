import styles from "@/app/ui/dashboard/color/singleColor/singleColor.module.css";

const ColorPage = async () => {

    return (
        <div className={styles.container}>
            
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                <label>Color</label>
                <input type="text" name="name" placeholder="Name" />
                                
                <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default ColorPage;
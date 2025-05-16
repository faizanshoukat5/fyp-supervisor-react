import { useParams } from "react-router-dom";

const [product, setProduct] = useState(null);
const { id } = useParams();

useEffect(() => {
  const fetchProductById = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProduct({ id: docSnap.id, ...docSnap.data() });
    } else {
      setProduct(null);
    }
  };
  fetchProductById();
}, [id]);
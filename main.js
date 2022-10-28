// Set title
function Content() {
     const [title, setTitle] = useState('');

    useEffect(() => {
        document.title = title;
    })

    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
    )
}


// Call API update DOM

const tabs = ['comments', 'posts', 'albums'];
function Content() {

    const [datas, setDatas] = useState([]);
    const [type, setType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(datas => {
                setDatas(datas)
            })
    }, [type])


    return (
        <div style={{padding: 30}}>
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                    style={tab === type ? {backgroundColor: 'lightblue'} : {}}
                >
                    {tab}
                </button>
            ))}
            <ul>
                {datas.map(data => (
                    <li key={data.id}>{data.title}</li>
                ))}
            </ul>
        </div>
    )
}

// Listener DOM event
  // Scroll
const tabs = ['posts','comments','albums']
function Content() {

    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 200) {
                setShowGoToTop(true);
            }else {
                setShowGoToTop(false);
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div style={{padding: 30}}>
            {showGoToTop && (
                <button
                    style={{position: 'fixed', bottom: 50, right: 0}}
                >
                    Go to top
                </button>
            )}
        </div>
    )
}

   // Resize
function Content() {
    const [size, setSize] = useState(window.innerWidth);

    const handleResize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <div style={{padding: 30}}>
            <h1>Width: {size}</h1>
        </div>
    )
}

export default Content

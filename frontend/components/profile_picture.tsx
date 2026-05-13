

// Component for displaying a profile picture
function ProfilePicture({ src="/assets/profile_placeholder.png", alt="placeholder" }: { src?: string; alt?: string }) {
    return (
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-prussian-blue">
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    )
}



export default ProfilePicture;
import Head from 'next/head'
import Image from 'next/image'
import HomeGenericTitleBanner from '../components/home/GenericTitleBanner/homeGenericTitleBanner'
import SkillsSection from '../components/home/SkillsSection/SkillsSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <HomeGenericTitleBanner/>
    <SkillsSection />
    </>
  )
}

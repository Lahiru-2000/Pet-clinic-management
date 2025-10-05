-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: rpc
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contactNumber` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `appointmentType` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci,
  `petAge` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `petBreed` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reasonForVisit` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('pending','confirmed','completed','cancelled') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `tp` int DEFAULT NULL,
  `date` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `petname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `docname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (3,'Nuwansala Deshanjali','wjanodyasamo@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,'pending',768354494,'2024-10-04T20:22','','Kane','Doctor1','Test',NULL,NULL),(4,'John Doe','johndoe@example.com',NULL,NULL,NULL,NULL,NULL,NULL,'pending',1234567890,'2024-10-05','','Buddy','Dr. Smith','Regular check-up for my dog.',NULL,NULL),(5,'John Doe','johndoe@example.com',NULL,NULL,NULL,NULL,NULL,NULL,'pending',1234567890,'2024-10-05','','Buddy','Dr. Smith','Regular check-up for my dog.','2024-10-04 13:00:00','2024-10-04 13:00:00'),(6,'Nuwansala Deshanjali','wjanodyasamo@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,'pending',768354494,'2024-10-10T20:34','','Teddy','Doctor1','Test1 Test1','2024-10-05 04:04:07','2024-10-05 21:04:30'),(8,'Nuwansala Deshanjali','wjanodyasamo@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,'pending',112683768,'2024-10-19T12:01','','tedy','Doctor1','Hello','2024-10-05 19:31:27','2024-10-05 19:31:27'),(9,'Nuwansala Deshanjali','wjanodyasamo@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,'pending',1123345678,'2024-10-04T12:01','','teddy3','Doctor2','Hello 1','2024-10-05 19:31:56','2024-10-05 19:31:56'),(10,'Nuwansala Deshanjali','wjanodyasamo@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,'pending',1111111111,'2024-10-25T12:46','','Test2','Doctor1','Test3 Appionment','2024-10-05 20:16:39','2024-10-05 21:03:54'),(11,'Nuwansala Deshanjali','wjanodyasamo@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,'pending',705645721,'2024-10-08T12:20','','Bool','testDoctor2','hi','2024-10-07 05:46:57','2024-10-07 05:46:57'),(12,'Nuwansala Kumarasinghe','nuwak1996@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,'pending',712667071,'2024-10-10T12:22','','Kane','Doctor2','Want a appointment','2024-10-08 18:51:58','2024-10-08 18:51:58'),(13,'lahiru Jayarathne','lahiru@gmail.com','1234567890','lasigvgv','hfhft','2','Labrador Retriever','hfdthdhtht','pending',NULL,'2025-09-17','23:19','lasi','Doctor2',NULL,NULL,NULL);
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-30 23:59:29

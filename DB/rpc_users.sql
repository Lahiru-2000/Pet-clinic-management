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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `isAdmin` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'John Doe','john.d22@example.com',NULL,'$2y$12$S0hQpHtC/LagLlXGwjblTeAO8FbS9xJmf9tbz8u4kxCVnQeYPjyje',NULL,'2024-10-01 02:54:41','2024-10-01 02:54:41','false'),(2,'John Doe','john.d23@example.com',NULL,'$2y$12$dZUitZzC1fXSjHKOsMQPK.NL8BAc9hOb6PFYE05yHyayfJx36MetK',NULL,'2024-10-01 02:58:50','2024-10-01 02:58:50','false'),(3,'Nuwansala Deshanjali','wjanodyasamoshi@gmail.com',NULL,'$2y$12$GHwcMlG.KIWtmA3jFP.LueybY/zuOvBltxfcgPnQWed7ZXugwYiva',NULL,'2024-10-01 03:18:46','2024-10-01 03:18:46','false'),(4,'Nuwansala Deshanjali','wjanodyasamo@gmail.com',NULL,'$2y$12$DX3ZVEhiaR.luvUSGMdQbeMu44v0IZLO396X2c.MAb0dIksWI6NSG',NULL,'2024-10-01 03:26:46','2024-10-01 03:26:46','false'),(5,'Admin Admin','admin@gmail.com',NULL,'$2y$12$FjUi3cDQvq12zyNDWCe.n.DkzVNm5TwyNodNmxSA.F/bf3vcfh2Yi',NULL,'2024-10-08 15:15:54','2024-10-08 15:15:54','true'),(6,'Nuwansala Kumarasinghe','nuwak1996@gmail.com',NULL,'$2y$12$N9BfjVu.3rpN8O0LLRkKK.3CN9GaZRQmO4VV9yoMhGK/ZlM//bviq',NULL,'2024-10-08 17:21:12','2024-10-08 17:21:12','false'),(7,'Anura Ekanayake','anura@gmail.com',NULL,'$2y$12$F3kiZdwmT/Rr6SDvW9ik0.rSgtClD.6lkKqTypjluSCQL8NL7/9h2',NULL,'2024-10-08 18:55:13','2024-10-08 18:55:13','false'),(8,'lahiru Jayarathne','lahiru@gmail.com',NULL,'$2y$12$3zu/Sp.uH3XewVJ4PDa7leAR8I4amoXp1vFfb94A0h0Y7XjOoCYMW',NULL,'2025-09-29 12:31:48','2025-09-29 12:31:48','false'),(9,'lahiru admin','ladmin@gmail.com',NULL,'$2y$12$L9zryREkD.AhHTH74bXVG.aorZ0vUSR.n8IWUG3ByEF1BCvGmal1i',NULL,'2025-09-30 08:54:21','2025-09-30 08:54:21','true');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-30 23:59:30

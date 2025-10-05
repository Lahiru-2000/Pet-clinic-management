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
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',8,'auth-token','2e204a6aeea2f9c1b18a0598451963ddc6180836eacdb6a5b99aa8fa4df327c5','[\"*\"]','2025-09-29 12:32:02',NULL,'2025-09-29 12:32:00','2025-09-29 12:32:02'),(2,'App\\Models\\User',8,'auth-token','72ff7a5ec98e5e63bc02dbf2ca588022827afe3aa06ef232508dd13d4afd03b3','[\"*\"]','2025-09-29 22:15:53',NULL,'2025-09-29 22:15:48','2025-09-29 22:15:53'),(3,'App\\Models\\User',8,'auth-token','939bb5a16b842ebea28030b85ebd6364e27425e32fd57292175c623091eab98a','[\"*\"]','2025-09-30 04:44:26',NULL,'2025-09-29 22:15:50','2025-09-30 04:44:26'),(4,'App\\Models\\User',8,'auth-token','d920e37a940934845f41f0e90a0b140a2f1b65fcecf49bf7675d3393c9dc929a','[\"*\"]','2025-09-30 06:49:37',NULL,'2025-09-30 06:39:02','2025-09-30 06:49:37'),(5,'App\\Models\\User',8,'auth-token','b2d2c3f310f24d377221d27efbc5049ca92b1d0a97b740c33c71b96a41f9bfc1','[\"*\"]','2025-09-30 06:58:40',NULL,'2025-09-30 06:49:49','2025-09-30 06:58:40'),(6,'App\\Models\\User',8,'auth-token','efe047511fc8ca27e9ae574edd9de6219ad65cb4efd01ef317b5fa4aadeaefa0','[\"*\"]','2025-09-30 08:45:24',NULL,'2025-09-30 06:58:50','2025-09-30 08:45:24'),(7,'App\\Models\\User',8,'auth-token','77491ee5e588b700e764d47627a6ab6336549c7b20de5e93f56aa2c1018cc9aa','[\"*\"]','2025-09-30 08:46:36',NULL,'2025-09-30 08:46:14','2025-09-30 08:46:36'),(8,'App\\Models\\User',9,'auth-token','dc0e833892207b08c401a83999c397b5963c13b6dd8f130f688081d2caeb791d','[\"*\"]','2025-09-30 11:59:13',NULL,'2025-09-30 08:56:09','2025-09-30 11:59:13'),(9,'App\\Models\\User',8,'auth-token','a802ce5726d19d86ed3095146602a91dfae672425573efedda5db650d9de6f12','[\"*\"]','2025-09-30 12:00:26',NULL,'2025-09-30 12:00:22','2025-09-30 12:00:26'),(10,'App\\Models\\User',8,'auth-token','8a9d45747c21e93c51bb97cc57666cd8f3724f2e31adfffc6563c7dbe96daa0b','[\"*\"]','2025-09-30 12:09:39',NULL,'2025-09-30 12:00:23','2025-09-30 12:09:39'),(11,'App\\Models\\User',8,'auth-token','74ebefc182ddf2cd74c1e16b837289e652c8a6f7649a829ba1f58962c1a9bf50','[\"*\"]','2025-09-30 12:50:10',NULL,'2025-09-30 12:11:41','2025-09-30 12:50:10');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
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

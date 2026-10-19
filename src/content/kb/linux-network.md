---
title: Linux 网络笔记
category: 工作
summary: Linux 网络配置常用命令，含 ping、ifconfig、网络排查思路。
order: 3
---

## 网络配置查看

### 查看 IP 地址

`ifconfig` 或 `ip addr` 查看网卡 IP 地址信息。

### 查看路由

`route -n` 或 `ip route` 查看路由表。

## 网络测试

### ping 测试连通性

`ping 目标IP` 测试与目标主机的网络连通性。

### 端口测试

`telnet 目标IP 端口` 或 `nc -zv 目标IP 端口` 测试端口是否开放。

## DNS 解析

### 查看 DNS

`nslookup 域名` 或 `dig 域名` 查询域名解析结果。

### 修改 DNS

编辑 `/etc/resolv.conf` 添加 `nameserver 8.8.8.8`。

## 防火墙

### 查看规则

`iptables -L -n` 查看当前防火墙规则。

### 开放端口

`iptables -A INPUT -p tcp --dport 80 -j ACCEPT` 开放 80 端口。

using System;
using System.Collections.Generic;
using System.Text;
using Emart.AccountService.Models;
using Emart.AccountService.Repositories;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
    public class TestAccountService
    {
        AccountRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AccountRepository(new EmartDBContext());
        }
        [Test]
        [Description("Test BuyerRegister()")]
        public void BuyerRegister()
        {
            _repo.BuyerRegister(new Buyer()
            {
                BuyerId = "B5",
                UserName = "sowji",
                EmailId = "psaisowji@gmail.com",
                Password = "sowji123",
                MobileNo = "9876683234",
                CreatedDateTime = DateTime.Now

            }) ;
            var result = _repo.BuyerLogin("sowji", "sowji123");
                Assert.IsNotNull(result);      
        }
[Test]
[Description("Test SellerLogin()")]
    public void SellerRegister()
        {
            _repo.SellerRegister(new Seller()
            {
                SellerId = "4",
                UserName = "sai",
                Password = "sai123",
                CompanyName = "Cts",
                Gstin = "13",
                BriefDetails = "Mnc",
                PostalAddress = "Banglore",
                Website = "www.cts.com",
                EmailId = "sowji@cts.com",
                MobileNo = "9876598843"

            });
            var result = _repo.SellerLogin("sai", "sai123");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test SellerLogin()")]
            public void SellerLogin()
        {
            var result = _repo.SellerLogin("sowji", "sowji123");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test BuyerLogin()")]
        public void BuyerLogin()
        {
            var result = _repo.BuyerLogin("sai", "sai123");
            Assert.IsNotNull(result);
        }
    }
}
